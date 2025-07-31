const authorizeRoles = (...allowedRole) => {
  return (req, res, next) => {
    if (!allowedRole.includes(req.user?.role)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    next();
  };
};

export default authorizeRoles;
