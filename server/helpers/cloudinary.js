const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dzrxh5jru",
  api_key: process.env.CLOUDINARY_API_KEY || "111512544592182",
  api_secret: process.env.CLOUDINARY_API_SECRET || "YZtoVrznGuQZSG6Gj5VIVSpCSSQ",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
