README template

# Umberto Mirko - 04/03/2020

## Installation

`npm i`
Please note that there is a subfolder called client that contains the front end code and a separate package.json (you can use `yarn` or `npm` for this folder).

You will also need a local instance of MongoDB running - for simplicity sake I am just running it on the local host so no authentication is needed.

Once everything is set up you can run `npm run dev` from root folder. This will create a proxy from port :3000 to :4000 allowing you to run both servers concurrently (sometimes proxy cache a corrupt version and a reload on the front end page is needed).

To spin front end tests run `npm run test` from client.

## Security

Addressed:

- Set file limit to 10mb (prevents overflow) and check against both client and back end
- Added whitelisting on backend to accepts only .jpg and .png
- Added /accept property in HTML input elemnent (this is obviously very easy to remove from inspector)
- Used POST instead of PUT (https://security.stackexchange.com/questions/21413/how-to-exploit-http-methods/21424#21424)
- Used FILE api that only takes file name and hide the path

Not addressed:

- Upload could be done inside a form (right now HTML contains just an input and a button) and a CSRF token could be added
- Limit file name to X characters
- Hash file name provided by user to a custom one (this prevents evasion techniques used to bypass whitelisting)
- If files are uploaded to a directory, the folder should be sandboxed
- Run `file` command and inspects content of file to ensure that is indeed an image (this is server OS specific and doesnt prevent malware embedded in content)

## Improvements

- Due to time constraints I only wrote a few unit tests. There is room of improvement and add more complex tests such as uploading a file and ensuring UPLOAD button is working, filtering etc.
- Adding a preview of the uploaded image
- Layout rewamp
- Uploading multiple files
- Delete multiple files at once

## Libraries

Only external library on the front end is axios for making HTTP requests.

## API

I am using Express for creating the API. I have decided to use a local instance of MongoDB vs storing in S3 or Firebase as I thought that this also shows how I would set up a backend layer (vs just storing files in the cloud). Also easier for local testing if people reviewing the code don't have a AWS account.

### GET /api/files

- GET a list of files stored in the db
- Returns a list of files or error

### POST /api/upload

- POST a single image to db
- Check image extension against whitelist
- Check image size
- Expects name, size, data (not being stored in the db for now)
- Returns successfully stored file info or error

### DELETE /api/files/:id

- DELETE a single image in db
- Expects image id as parameter
- Returns success message and deleted image ID or error

---

## Other notes

- Since preview of the image was not required in the wireframe, I am only storing image metadata on the db and rendering that data (for faster performance).
