exports.getAcceuil= (req, res, next) => {
    res.render('fr/pagefr', {
      pageTitle: 'TopFrench-Learning Acceuil',
      path: '/'
    });
};
exports.getConnect = (req, res, next) => {
  res.render('fr/connect', {
    pageTitle: 'TopFrench-Learning identification',
    path: '/connect'
  });
};
exports.getPaiement = (req, res, next) => {
res.render('fr/paiement', {
  pageTitle: 'TopFrench-Learning Paiement',
  path: '/paiement'
});
};
exports.getEnregistrement = (req, res, next) => {
res.render('fr/enregistrement', {
  pageTitle: 'TopFrench-Learning Enregistrement',
  path: '/enregistrement'
});
};
exports.getPratique = (req, res, next) => {
res.render('fr/pratique', {
  pageTitle: 'TopFrench-Learning Cours de pratique',
  path: '/services'
});
};

exports.getApprendre = (req, res, next) => {
res.render('fr/apprendre', {
  pageTitle: 'TopFrench-Learning Cours d\'apprentissage',
  path: '/services'
});
};
exports.getApropos = (req, res, next) => {
res.render('fr/Apropos', {
  pageTitle: 'TopFrench-Learning A propos',
  path: '/Apropos'
});
};
exports.getApropos = (req, res, next) => {
res.render('fr/Apropos', {
  pageTitle: 'TopFrench-Learning A propos',
  path: '/Apropos'
});
};
exports.getContacter = (req, res, next) => {
  res.render('fr/contacter', {
    pageTitle: 'TopFrench-Learning Nous Contacter',
    path: '/nouscontacter'
  });
  };
  exports.getClassesDetails = (req, res, next) => {
    res.render('fr/classesdetails', {
      pageTitle: 'TopFrench-Learning Learning classes Details',
      path: '/classesdetails'
    });
  };
  exports.getPractiqueDetails = (req, res, next) => {
    res.render('fr/pratiquesdetails', {
      pageTitle: 'TopFrench-Learning Sessions Practiques Details',
      path: '/practicedetails'
    });
  };
  exports.getA1Details = (req, res, next) => {
    res.render('fr/details/a1detail', {
      pageTitle: 'TopFrench-Learning classe A1 Details',
      path: '/a1details'
    });
  };
  exports.getA2Details = (req, res, next) => {
    res.render('fr/details/a2detail', {
      pageTitle: 'TopFrench-Learning classe A2 Details',
      path: '/a2details'
    });
  };
  exports.getB1Details = (req, res, next) => {
    res.render('fr/details/b1detail', {
      pageTitle: 'TopFrench-Learning  classe B1 Details',
      path: '/b1details'
    });
  };
  exports.getB2Details = (req, res, next) => {
    res.render('fr/details/b2detail', {
      pageTitle: 'TopFrench-Learning classe B2 Details',
      path: '/b2details'
    });
  };
  exports.getC1Details = (req, res, next) => {
    res.render('fr/details/c1detail', {
      pageTitle: 'TopFrench-Learning classe C1 Details',
      path: '/c1details'
    });
  };
  exports.getC2Details = (req, res, next) => {
    res.render('fr/details/c2detail', {
      pageTitle: 'TopFrench-Learning classe C2 Details',
      path: '/c2details'
    });
  };