const cloudinary = require("cloudinary/lib/cloudinary");

cloudinary.config({
  cloud_name: "adamandevil",
  api_key: "223389853275881",
  api_secret: "rsMRAL6uFyi3ufgFEAEdGJBl5Vo"
});

exports.uploads = file => {
  return new Promise(resolve => {
    cloudinary.uploader.upload(
      file,
      result => {
        resolve({ url: result.url, id: result.public_id });
      },
      { resource_type: "auto" }
    );
  });
};
