const isAdmin = async (req, res, next) => {
  try {
    // Assuming req.id is set by isAuthenticated
    const { User } = await import('../models/user.model.js');
    const user = await User.findById(req.id);
    if (!user || user.role !== 'recruiter') {
      return res.status(403).json({ message: 'Access denied: Recruiters only', success: false });
    }
    next();
  } catch (error) {
    return res.status(500).json({ message: 'Server error', success: false });
  }
};

export default isAdmin;
