use("practica_4_db")
use("miBaseDatos")

db.coleccion1.updateMany(
  { tema: { $in: ["tema1", "tema2"] } },
  { $set: { campoB: 999, modificado: true } }
)

db.coleccion2.updateMany(
  { tema: { $in: ["temaA1", "temaB2"] } },
  { $set: { campoB: 888, modificado: true } }
)

db.coleccion3.updateMany(
  { tema: { $in: ["tema1", "tema2"] } },
  { $set: { campoB: 777, modificado: true } }
)

db.coleccion4.updateMany(
  { tema: { $in: ["temax1", "temax2"] } },
  { $set: { campoB: 666, modificado: true } }
)

db.coleccion5.updateMany(
  { tema: { $in: ["temaA1", "temaA2"] } },
  { $set: { campoB: 555, modificado: true } }
)
