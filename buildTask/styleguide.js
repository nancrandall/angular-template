//------------------------------------------------------------------------------
/*   Application Name: Angular POC
 *       Date Created: 09.28.2017
 *           Compiler: TypeScript 2.0
 *
 *     Change History:
 *      Date            Programmer      Description/Comments/DefectID
 */
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
  /**
   * NodeJs script to copy style guide to our projects and make some adjustments
   */
//------------------------------------------------------------------------------

//------------------------------------------------------------- helper shortcuts
const NodeTask = require('./helper/nodeTask');
const helper   = require('./helper/buildHelper');
const fs   = require('fs');

//-------------------------------------------------------------------- constants
const npmStyleguideDir = 'node_modules/styleguide'
const assetsDir = 'src/assets'

const styleguide_asset_fonts_dir = npmStyleguideDir + '/lib/modern/assets/fonts/';
const app_asset_fonts_dir = assetsDir + '/fonts/';
const styleguide_asset_img_dir = npmStyleguideDir + '/lib/modern/assets/images/';
const app_asset_img_dir = assetsDir + '/images/';

styleguideTask = new NodeTask.Task('Build styleguide')
const step = styleguideTask.step;
const done = styleguideTask.done;
//----------------------------------------------------------------------- STEP 1
//--------------------------------- make sure styleguide exists, in node_modules
step(`make sure styleguide exists, in node_modules`, () =>
{
  if(!fs.existsSync(npmStyleguideDir)){
    throw new Error(`${npmStyleguideDir} does not exist, try 'npm install'`);
  }
});

//----------------------------------------------------------------------- STEP 2
//-------------------------------------------------------- copy styleguide fonts
step(`copy styleguide fonts: ${styleguide_asset_fonts_dir}
      to ${app_asset_fonts_dir}`, ()=>
{
  helper.copyDir(styleguide_asset_fonts_dir, app_asset_fonts_dir);
});

//----------------------------------------------------------------------- STEP 3
//------------------------------------------------------- copy styleguide images
step(`copy styleguide images from: ${styleguide_asset_img_dir}
      to ${app_asset_img_dir}`, ()=>
{
  helper.copyDir(styleguide_asset_img_dir, app_asset_img_dir);
  // helper.copyFiles(styleguide_asset_img_dir, app_asset_img_dir, fs.readdirSync(styleguide_asset_img_dir));
});

done();