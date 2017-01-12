module.exports = function(sequelize, DataTypes) {
    // define entity
    var Modele = sequelize.define('Modele', {
      Denumire: {
        type: DataTypes.STRING,
        field: 'Denumire'
      },
      An_aparitie: {
        type: DataTypes.STRING,
        field: 'An_aparitie'
      },
      Motorizare: {
        type: DataTypes.STRING,
        field: 'Motorizare'
      },
      Pret: {
        type: DataTypes.STRING,
        field: 'Pret'
      }
    }, {
      timestamps: false,
      freezeTableName: true
    });
    
    return Modele;
};