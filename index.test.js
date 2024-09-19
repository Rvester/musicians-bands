const { Band } = require("./models/Band");
const { Musician } = require("./models/Musician");
const { db } = require("./db");
const { Song } = require("./models/Song");

// Setup before all tests
beforeAll(async () => {
  await db.sync({ force: true }); // Clear the database
});

// Teardown after all tests
afterAll(async () => {
  await db.close(); // Close the connection
});

describe("Model Tests", () => {
  test("Create a Band", async () => {
    const band = await Band.create({ name: "The Beatles", genre: "Rock" });
    expect(band.name).toBe("The Beatles");
    expect(band.genre).toBe("Rock");
  });

  test("Create a Musician", async () => {
    const musician = await Musician.create({
      name: "John Lennon",
      instrument: "Guitar",
    });
    expect(musician.name).toBe("John Lennon");
    expect(musician.instrument).toBe("Guitar");
  });

  test("Create a Song", async () => {
    const song = await Song.create({
      title: "Hey Jude",
      year: 1968,
      length: 420,
    });
    expect(song.title).toBe("Hey Jude");
    expect(song.year).toBe(1968);
    expect(song.length).toBe(420);
  });

  test("Update a Band", async () => {
    let band = await Band.create({ name: "The Beatles", genre: "Rock" });
    band = await band.update({ genre: "Pop" });
    expect(band.genre).toBe("Pop");
  });

  test("Update a Musician", async () => {
    let musician = await Musician.create({
      name: "John Lennon",
      instrument: "Guitar",
    });
    musician = await musician.update({ instrument: "Piano" });
    expect(musician.instrument).toBe("Piano");
  });

  test("Update a Song", async () => {
    let song = await Song.create({
      title: "Hey Jude",
      year: 1968,
      length: 420,
    });
    song = await song.update({ length: 450 });
    expect(song.length).toBe(450);
  });

  test("Delete a Band", async () => {
    const band = await Band.create({ name: "The Beatles", genre: "Rock" });
    const result = await band.destroy();
    expect(result).toBe(1); // The number of rows affected
  });

  test("Delete a Musician", async () => {
    const musician = await Musician.create({
      name: "John Lennon",
      instrument: "Guitar",
    });
    const result = await musician.destroy();
    expect(result).toBe(1);
  });

  test("Delete a Song", async () => {
    const song = await Song.create({
      title: "Hey Jude",
      year: 1968,
      length: 420,
    });
    const result = await song.destroy();
    expect(result).toBe(1);
  });

  test("Add Musician to Band", async () => {
    const band = await Band.create({ name: "The Beatles", genre: "Rock" });
    const musician = await Musician.create({
      name: "John Lennon",
      instrument: "Guitar",
      bandId: band.id,
    });
    const bandWithMusicians = await Band.findByPk(band.id, {
      include: "musicians",
    });
    expect(bandWithMusicians.musicians.length).toBe(1);
    expect(bandWithMusicians.musicians[0].name).toBe("John Lennon");
  });

  test("Add Song to Band", async () => {
    const band = await Band.create({ name: "The Beatles", genre: "Rock" });
    const song = await Song.create({
      title: "Hey Jude",
      year: 1968,
      length: 420,
    });
    await band.addSong(song);
    const bandWithSongs = await Band.findByPk(band.id, { include: "songs" });
    expect(bandWithSongs.songs.length).toBe(1);
    expect(bandWithSongs.songs[0].title).toBe("Hey Jude");
  });
});
