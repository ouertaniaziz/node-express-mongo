const mongoose = require("mongoose");
const event = require("../model/events");

const createEvent = async (req, res) => {
  console.log("ffre");
  console.log(req.body, "dfgdsfg");
  const { title, Description, NbParticipant } = req.body;

  try {
    const newEvents = new event({
      title: title,
      Description: Description,
      NbParticipant: parseInt(NbParticipant),
    });
    await newEvents.save();
    res.redirect("/event");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new event!" });
  }
};

const getAllEvent = async (req, res) => {
  try {
    const events = await event.find();

    res.render("index.twig", { title: "My Form", events: events });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch events!" });
  }
};
const deleteEvents = async (req, res) => {
  const { eventId } = req.params;

  try {
    await event.findByIdAndDelete(eventId).then(() => {
      global.io.emit("delete", "user tfasakh");
    });

    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete the event!" });
  }
};

const editEvent = async (req, res) => {
  const { eventId } = req.params;
  const { title, Description, NbParticipant } = req.body;

  try {
    const updatedEvent = await event.findByIdAndUpdate(
      eventId,
      { title, Description, NbParticipant },
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ error: "Event not found" });
    }
    res.redirect("/event");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the event" });
  }
};

const updateForm = async (req, res) => {
  const { eventId } = req.params;

  try {
    const e = await event.findById(eventId);

    console.log("tettss", eventId);

    res.render("updateForm.twig", { title: "My Form", event: e });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update the event!" });
  }
};

module.exports = {
  createEvent,
  getAllEvent,
  deleteEvents,
  editEvent,
  updateForm,
};
