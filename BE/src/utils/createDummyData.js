const dataSchema = require("../models/dataModel");
const dummyData = require("../data/dummyData.json");

async function createNewRecord() {
  let record = new dataSchema(dummyData[0]);
  const duplicate = await dataSchema.find({
    "organizers.id": record.organizers[0].id, // assuming `id` exists in the first organizer
  });
  try {
    if (duplicate.length === 0) {
      record = await record.save();
      console.log("record saved! " + record);
    } else {
      console.log("The record with the same organizer id already exists.");
    }
  } catch (e) {
    console.log(">>>There was an error:" + e);
  }
}

module.exports = createNewRecord;
