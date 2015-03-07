Email app
=========

by Mike Goren

This is a simple less-than-functional email app as practice learning Ember.

Known Issues
------------

ANNOYING BUG!!! ANY IDEAS??? 
Assigning folders seems to work, and it shows up correctly (in the data of Ember inspector as well as the interface) when looking at email.hbs linked to from folders.hsb, but the assigned folder becomes null apparently when linked to email.hsb from emails.hsb. The assignment appears again though when going from the folder view again. Spent hours troubleshooting to no avail.



Installation
------------

Install by first cloning the repository: 
`$ git clone http://github.com/mgoren/email-ember.git`

Run the following command to start the python server:
`$ python -m SimpleHTTPServer`

In your browser, go to the following page:
`localhost:8000`

License
-------

GNU GPL v2. Copyright 2015
