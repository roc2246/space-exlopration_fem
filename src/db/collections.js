import db from "$db/mongo"

export const destinations = db.collection("destinations")
export const crew = db.collection("crew")
export const technology = db.collection("technology")

