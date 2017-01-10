# JsonHelper

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'json_helper'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install json_helper

## Usage

## JSON-Helper 0.1.0

### What it does

This gem will add Javascript and CSS to a rails project to let JSONified text get made for you simply by entering in key-value fields in a pop-up form within a modal. No more having to write out all those squigly-brackets, quotation marks, and colons; this will do it for you.

The functionality is very basic right now, as this is really just meant as a handy shortcut if you need, for example, payload params in a POST request to be quickly converted to JSON.

### Contetnts

There are four files in this package, including this README.

The others are:

#### sample.html
This file has sample html, including two text areas and the modal in which the helper form resides. Things to note in this file are that:

1. Each text area has an ID attribute. This is required so that the helper knows where to put your stringified JSON when you click save. It'll add the final output JSON to the textarea with the ID in which you clicked to open the modal. The ID can be anything you like--there is no required convention for this part.
2. Each text area that you want to trigger JSON-helper needs to have a class of "json-helper".

It is suggested you borrow the modal code directly, but if you want to modify it and/or make your own, be wary of the way IDs and classes are used in the CSS and JS files so that the event listeners still get triggered.

#### json_helper.css
This file has the CSS to style elements of the modal. Feel free to edit the style as you like, just be careful about renaming the pre-given non-bootstrap classes, as they might mess with the Javascript if you change them.

Also, there are some Twitter Bootstrap classes included too, so if you're using that you've got extra built-in styling shortcuts. These are discardable/changeable if you like.

#### json_helper.js
This is where all the javascript lives, including functions to open the modal upon clicking in a text area you want JSONified, adding and deleting rows from the form, and the conversion upon hitting the save button.

## Don't change these classes!

These are the classes and IDs you need to make the Javascript (as currently written) work:

1. Textareas: must have an ID (of anything you want to name it) and a class of "text-area"
2. Modal: must have an ID of "modal"
3. Button to add a row in the form: ID of "add-row"
4. Delete a row button (looks like an 'X'): class of "delete-button"
5. Cancel button (just closes/hides the modal): ID of "cancel-button"
6. Save button: ID of "save-button"
7. The form within the modal content: ID of "json-form"

That's it I think. Enjoy your auto-JSONified text!

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/[USERNAME]/json_helper.
