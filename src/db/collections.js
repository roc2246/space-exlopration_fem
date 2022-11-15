import db from "$db/mongo"

export const destination = db.collection("destination")
export const crew = db.collection("crew")
export const technology = db.collection("technology")

