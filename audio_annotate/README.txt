
CONTENTS OF THIS FILE
---------------------

 * Overview
 * Required Componentss
 * Installation / Configuration
 * Help & Contribution
 * Credits

Overview
---------

This module provides a cck formatter. It creates an image form an audio file
and allows the placement of comments on top using jquery.

sandbox : http://drupal.org/sandbox/digitisation/1365530
project home : http://audio.8bitplateau.net/about


Required Components
-------------------

SERVER:

LAME
 The LAME application needs to be installed on your server.

EXEC
  PHP 'exec' command needs to be accessible on your server.
  It is denied on some servers for good reason.

DRUPAL MODULES:

comment
 Audio Annotate is essentially an extension to the comment module.
 Therefore, all permissions are taken from comment.

filefield
  The base CCK field module that we are providing a formatter for.

jquery_update
  Bringing everything uptodate, the standard release is enough for now.

jquery_ui
  IMPORTANT - jquery-ui-1.7.3.custom.js version from Google is required.
  It needs to go in Libraries folder, 
  NOT other versions and NOT in the jquery_ui module folder.

jplayer
  We use jplayer for the actual HTML5 audio player for now.
  This provides us with a play bar and buttons.
  Version 1.1 of the jPlayer library is required in the libraries folder.
  We do theme the player and will affect all players site-wide.

transliteration
  Used for handling nasty file names.
  This is important as we compile a string to pass to EXEC in PHP.

Installation / Configuration
----------------------------

* copy the contents of the 'aa_theme' folder to your active theme folder.
 (if you on a linux server you can just make links;)
* install this module and its dependencies.
* go to our module as admin/settings/audio_annotate and set a few settings.
* whilst there, press the 'test' checkbox to amke sure LAME outputs to screen.
* go to jPlayer module admin and save the form to set the library path.
* edit or create a new node type:
  * create a new 'file' cck field.
  * add the extension 'mp3' the only type we allow.
  * go to the 'display settings' and choose 'Audio with Annotations'
* create a new node that has this field and upload an mp3 to it.
* set comments to read/write for this node to enable annotations.
* (advised) set comment preview to 'optional' for this node type.


Help & Contribution
-------------------

This module was largely inspired by the 'image annotate' module,
and relies on jplayer module so thanks to both.
It was also inspired by sound-cloud and other many other services.
And a big thanks to;
http://andrewfreiday.com/2010/04/29/generating-mp3-waveforms-with-php/
for providing the byte crunching ideas.

Credits
-------

Jowan Sebastian & Aaron Marr of Technology Enhanced Learning,
University College Falmouth.
