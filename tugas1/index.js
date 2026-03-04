import express from "express";

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());

/* ROUTE "/" */
app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>Home</title></head>
      <body>
        <h1>Halo, Selamat datang di Web Ahmad Zaelani</h1>
        <p>Ini adalah halaman Home</p>
      </body>
    </html>
  `);
});

/* ROUTE "/AboutMe" */
app.get("/AboutMe", (req, res) => {
  res.send(`
    <html>
      <head><title>About Me</title></head>
      <body>
        <h1>About Me</h1>
        <p>Nama: Ahmad Zaelani</p>
        <p>NPM: 23552011179</p>
        <p>Mahasiswa Kelas TIF RM 23B Mata Kuliah Pemrograman Web 2</p>
      </body>
    </html>
  `);
});

/* GET */
app.get("/user/az", (req, res) => {
  res.status(200).json({
    method: "GET",
    message: "GET user az berhasil"
  });
});

/* POST */
app.post("/user/az", (req, res) => {
  res.status(200).json({
    method: "POST",
    message: "POST user az berhasil"
  });
});

/* PUT */
app.put("/user/az", (req, res) => {
  res.status(200).json({
    method: "PUT",
    message: "PUT user az berhasil"
  });
});

/* PATCH */
app.patch("/user/az", (req, res) => {
  res.status(200).json({
    method: "PATCH",
    message: "PATCH user az berhasil"
  });
});

/* DELETE */
app.delete("/user/az", (req, res) => {
  res.status(200).json({
    method: "DELETE",
    message: "DELETE user az berhasil"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});