import inquirer from "inquirer"
import qr_image from "qr-image"
import fs from "fs"
inquirer
  .prompt([
    {
        name:"URL",
        message:"Enter URL"
    }
  ])
  .then((answers) => {
    const URL=answers.URL;
    var qr_svg = qr_image.image(URL);
    qr_svg.pipe(fs.createWriteStream('QR.png'));

   console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
