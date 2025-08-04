import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {// file multar ka pas hota hai and cb callback hota hai
        cb(null, "./public/temp");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

export const upload = multer({ storage, });
