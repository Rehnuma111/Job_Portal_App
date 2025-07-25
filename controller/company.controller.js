import { Company } from "../models/company.model.js";
import cloudinary from "../utils/cloudniary.js";
import getDataUri from "../utils/getDataUri.js";

export const registerCompany = async (req, res) => {
  try {
    const { companyName } = req.body;
    console.log("companyName", companyName);

    if (!companyName) {
      return res.status(400).json({
        message: "Company name is required",
        success: false,
      });
    }
    console.log("companyName", companyName);

    const existingCompany = await Company.findOne({ name: companyName });

    console.log("existingCompany", existingCompany);

    if (existingCompany) {
      return res.status(409).json({
        message: "Company already registered",
        success: false,
      });
    }

    const newCompany = await Company.create({
      name: companyName,
      userId: req.id,
    });

    return res.status(201).json({
      message: "Company registered successfully",
      company: newCompany,
      success: true,
    });
  } catch (error) {
    console.error("Error registering company:", error);
    return res.status(500).json({
      message: "Server error while registering company",
      success: false,
    });
  }
};

export const getCompany = async (req, res) => {
  try {
    const userId = req.id; // logged in user id
    const companies = await Company.find({ userId });
    if (!companies) {
      return res.status(404).json({
        message: "Companies not found",
        success: false,
      });
    }
    return res.status(201).json({
      companies,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
//Get Comapany By Id
export const getCompanyById = async (req, res) => {
  try {
    const companyId = req.params.id;
    const company = await Company.findById(companyId);
    if (!company) {
      return res.status(404).json({
        message: "Company not found",
        success: false,
      });
    }
    return res.status(200).json({
      company,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const UpdateCompany = async (req, res) => {
  try {
    const { name, description, website, location } = req.body;
    const file = req.file;
    let logoUrl;

    // Handle file upload to Cloudinary if file is present
    if (file) {
      const fileUri = getDataUri(file);
      const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
      logoUrl = cloudResponse.secure_url;
    }

    // Prepare update object
    const updateOne = { name, description, website, location };
    if (logoUrl) {
      updateOne.logo = logoUrl;
    }

    const company = await Company.findByIdAndUpdate(req.params.id, updateOne, {
      new: true,
    });
    if (!company) {
      return res.status(400).json({
        message: "Company not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Company information Updated",
      success: true,
      company,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Something went wrong while updating company.",
      success: false,
      error: error.message,
    });
  }
};
