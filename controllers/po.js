import mongoose from "mongoose";
import products from "../models/po.js";
import { sendEmail } from "./sendEmail.js";
import nodemailer from "nodemailer";
export const getProducts = async (req, res) => {
  try {
    const postMessages = await products.find();

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletepost = async (req, res) => {
  let result = await products.deleteOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(req.params);
};

export const updatepost = async (req, res) => {
  let result = await products.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );

  res.send(result);
};
// export const createPost = async (req, res) => {
//   let newproductpost = new products(req.body);

//   let result = await newproductpost.save();
//   res.send(result);
// };
export const sendforapprover = async (req, res) => {
  let newproductpost = new products(req.body);

  let result = await newproductpost.save();
  res.send(result);
};

export const createPost = async (req, res) => {

  let file = (req.file) ? req.file.filename : null;
  const { userid } = req.body;

  let data = new products({ file, userid });
  let response = await data.save();


  // console.log("request.pppppppppppp1pfile",req.file.path)
  // console.log("request.pppppppppppppfile",req.file.originalname)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muhammadjibran890@gmail.com", // generated ethereal user
      pass: "srffpnbdmmgfpmgj", // generated ethereal password
    },

  });

  const options = {
    from: "muhammadjibran890@gmail.com",
    to: 'jibranjibran220@gmail.com',
    replyTo: "muhammadjibran890@gmail.com",
    subject: "New Request Fo Approval",
    html: `<h5>Hello Finance Manager,</h5>
  <p>there is a vendor which i like its Quotes, i send you for the approval, please update me.   </p>
  <p>Regards...</p>
  <p>Muhammad Jibran</p>` ,
    attachments: [
      {

        path: req.file.path

      }
    ]
  };


  transporter.sendMail(options, function (err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });

  res.status(200).json({ message: "added" })

};

export const addd = async (req, res) => {
  const postMessages = req.body;
  console.warn(postMessages);
};

export const createexcel = async (req, res) => {
  csvtojson();
  const productpost = req.body;
  const newproductpost = new products(productpost)
    .fromFile(productpost)
    .then((csvData) => {
      console.log(csvData);
      products
        .insertMany(csvData)
        .then(function () {
          console.log("Dta is inserted");
          res.json({ success: "success" });
        })
        .catch(function (error) {
          console.log(error);
        });
    });
};

export const getProduct = async (req, res) => {
  let result = await products.find({ id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Find" });
  }
};
export const viewUserProfile = async (req, res) => {
  let result = await products.find({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Find" });
  }
};
//  export const getProductbyemail = async (req, res) => {

//     let result = await products.findOne({ to: req.params.to })
//     if (result) {
//         res.send(result)
//     } else {
//         res.send({ "result": "No Record Find" })
//     }

// }
export const getProductbyemail = async (req, res) => {
  console.log(req.params.email);
  let data = await products.find({
    $or: [{ id: { $regex: req.params.email } }],
  });
  res.send(data);
};
export const getProductforapprover = async (req, res) => {
  console.log(req.params.email);
  let data = await products.find({
    $or: [{ color: { $regex: req.params.email } }],
  });
  res.send(data);
};
// let result = await products.find({ to: req.params.id });
// if (result) {
//   res.send(result);
// } else {
//   res.send({ result: "No Record Find" });
// }

export const updateproduct = async (req, res) => {

  let result = await products.updateOne(

    { _id: req.params.id },
    {
      $set: req.body
    }

  )


  res.send(result)



};

export const deleteproduct = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No post with that id");
  await products.findByIdAndRemove(id);
  res.json({ message: "Post Deleted Sucessfully" });
};
