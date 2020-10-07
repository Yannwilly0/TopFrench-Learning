exports.getIndex = (req, res, next) => {
      res.render('en/pageen', {
        pageTitle: 'TopFrench-Learning Home',
        path: '/'
      });
  };
  exports.getLogin = (req, res, next) => {
    res.render('en/login', {
      pageTitle: 'TopFrench-Learning Login',
      path: '/login'
    });
};
exports.getPayment = (req, res, next) => {
  res.render('en/payment', {
    pageTitle: 'TopFrench-Learning payment',
    path: '/payment'
  });
};
exports.getRegistration = (req, res, next) => {
  res.render('en/registration', {
    pageTitle: 'TopFrench-Learning Registration',
    path: '/registration'
  });
};
exports.getPractice = (req, res, next) => {
  res.render('en/practice', {
    pageTitle: 'TopFrench-Learning Practice Class',
    path: '/services'
  });
};

exports.getLearn = (req, res, next) => {
  res.render('en/learn', {
    pageTitle: 'TopFrench-Learning Learning class',
    path: '/services'
  });
};
exports.getAbout = (req, res, next) => {
  res.render('en/about', {
    pageTitle: 'TopFrench-Learning About',
    path: '/about'
  });
};
exports.getLearnDetails = (req, res, next) => {
  res.render('en/lclassdetails', {
    pageTitle: 'TopFrench-Learning Learning class Details',
    path: '/learndetails'
  });
};
exports.getPracticeDetails = (req, res, next) => {
  res.render('en/pclassdetails', {
    pageTitle: 'TopFrench-Learning Practice class Details',
    path: '/practicedetails'
  });
};
exports.getA1Details = (req, res, next) => {
  res.render('en/details/a1detail', {
    pageTitle: 'TopFrench-Learning A1 class Details',
    path: '/a1details'
  });
};
exports.getA2Details = (req, res, next) => {
  res.render('en/details/a2detail', {
    pageTitle: 'TopFrench-Learning A2 class Details',
    path: '/a2details'
  });
};
exports.getB1Details = (req, res, next) => {
  res.render('en/details/b1detail', {
    pageTitle: 'TopFrench-Learning B1 class Details',
    path: '/b1details'
  });
};
exports.getB2Details = (req, res, next) => {
  res.render('en/details/b2detail', {
    pageTitle: 'TopFrench-Learning B2 class Details',
    path: '/b2details'
  });
};
exports.getC1Details = (req, res, next) => {
  res.render('en/details/c1detail', {
    pageTitle: 'TopFrench-Learning C1 class Details',
    path: '/c1details'
  });
};
exports.getC2Details = (req, res, next) => {
  res.render('en/details/c2detail', {
    pageTitle: 'TopFrench-Learning C2 class Details',
    path: '/c2details'
  });
};
exports.getContactUs = (req, res, next) => {
  res.render('en/contactus', {
    pageTitle: 'TopFrench-Learning Contact Us',
    path: '/contactus'
  });
};