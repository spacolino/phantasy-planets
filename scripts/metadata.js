const { task } = require("hardhat/config");
const fs = require("fs");

task("updateMeta", "Updates metadata with actual data")
//.addParam("path", "Path to metadata")
.addParam("count", "Files count")
.addParam("imageuri","Images Ipfs CID")
.addParam("pageuri","Images Ipfs CID")
.setAction(async function (taskArguments, hre) {
    
    // var path = taskArguments.path;
    var count = taskArguments.count;
    var imageUri = taskArguments.imageUri;
    var pageUri = taskArguments.pageUri;

    for (let id = 1; id <= count; id++) {
        fs.readFile(`../metadata/${id}.json`, "utf8", function(err,data){
            if(err) {
                return console.error(err);
            }            

            var result = data.replace("##IMAGE_URI##",`${imageUri}.png`)
                                .replace("##PAGE_URI##",`${pageUri}`);

            fs.writeFile(`../metadata/ready/${id}.png`,'utf8', (err) => {
                if(err) {
                    return console.error(err);
                }
            });

            console.log(`${id}.json`);
        });      
    }        
});