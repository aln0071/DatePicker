***USAGE:

Clone this git directory.
The date picker can be found in **react-date-picker/src/components/ directory.**
Now, to install dependencies, run npm install
After installation completes ( the script will install material-ui library ), run npm start
The simple date picker will be started in your browser.

***How can I use this component in my project?

To use it in your project, copy the contents of **react-date-picker/src/components/** folder ( DatePicker.jsx and DatePicker.css )
Paste the files in your project directory.
You can now use it by importing it.

***How can I import it?

An example of importing and using it is shown in **react-date-picker/src/App.js** file. You can use a similar code to import it and use it.

***I want to hack it. How can I do that?

If you want to make further changes to the date picker, do the following:

To change the date format:
  Go to line 80 of **DatePicker.jsx**. This is where the format is defined.
  Rearranging the parts between **'-'** will change date format ( default format is yyyy-mm-dd )
  Changing **'-'** between the blocks in this line will change the seperator symbol
