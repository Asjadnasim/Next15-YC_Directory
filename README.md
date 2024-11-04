Package json changes

Auth js for authentication

Sanity Setups
Install Sanity npm install
npm install sanity-plugin-markdown for markdown

Fetching data from sanity we use "Query Language (GROQ)"

 <link href='https://www.sanity.io/docs/groq'>Groq<link>
#Generating Typescript Types we install "npx sanity@latest schema extract --path=./sanity/extract.json"
<link href="https://www.sanity.io/docs/sanity-typegen">Type Gen for generating sanity types doc</link>

after extracting and creating file sanity-typegen.json we need to write command
npx sanity@latest typegen generate

update package.json
then run the command "npm run typegen" whenever we needs new type
