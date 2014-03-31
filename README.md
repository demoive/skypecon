# Skypecon

A library that enabling the [Skypecon](http://demoive.github.io/skypecon) catalog site which showcases all the Skype icons in their full, native quality. It makes their usage web-friendly leveraging all the webby things we love like CSS for animations, retina support, etc.

<!--
## Roadmap
The roadmap can be seen in [Trello](https://trello.com/b/E80u7hbd/skypecon).

## Features

- Retina support
- Different animation speeds
- Animated and non-animated versions
- Efficient bandwidth and GPU usage with CSS sprites
-->

## Usage

You're better off [playing around with the different options](http://demoive.github.io/skypecon/). But if you want some documentation, here ya go: define an HTML `<i>` tag with a class of `sc` and _one_ `sc-[icon]` type. Then alter its behavior with _at most one_ option from each set:

- **Animation**
  - `sc-hover` - only animate on hover
  - `sc-still` - prevents the animation (will override `sc-hover`)

- **Animation speed**
  - `sc-slow` - Reduces to ~20fps
  - `sc-fast` - Increases to ~40fps

- **Size**
  - `sc-2x` - Shows the icon at twice the size (40px). Has no effect on retina screens.
  - `sc-4x` - Coming soon


## Notice

This library was created with the utmost respect for the people responsible for the icons at Skype and exists to properly showcase their work while allowing some flexibility in its demonstration.

There are numerous sites around the web that catalog the emoticons and flags that are available in Skype, (especially for the popular hidden ones), however, none take advantage of showing the native (smooth) animation available and very few even show the icons in all their glory and different sizes. Not to mention they aren't driven by the community and don't appear easy to maintain or to scale well.


## Skype plug

The Skype team really hits a sweet spot in the set of icons they offer, achieving all of the following:

1. accurate expression/emotion captured
2. sufficient variety
3. appropriate animations
4. correct level of "cuteness"

I think others fail in at least one of these criteria. The [Emoji](http://www.emoji-cheat-sheet.com/) set is popular but doesn't offer animation and is too over-whelming. For example, I feel the following emotions don't warrant different icons:

- **tongue**: :stuck_out_tongue_closed_eyes: :stuck_out_tongue: :stuck_out_tongue_winking_eye:
- **kiss**: :kissing: :kissing_smiling_eyes: :kissing_closed_eyes: :kissing_heart:
- **smile**: :smile: :smiley: :grinning: :laughing: :satisfied: :relieved: :grimacing: :grin:
- **worried**: :worried: :anguished: :frowning: :dizzy_face:
- **cry**: :cry: :sweat: :tired_face: :weary: :cold_sweat: :disappointed_relieved: :sleepy: :pensive: :disappointed:

<!--
The [Phantom Open Emoji](https://github.com/Genshin/PhantomOpenEmoji) is promising. This library offers a great framework for using their work on the web.
-->


## License

The icons were not made by me - they are the property of [Skype](http://www.skype.com/) and should be used according to their license and usage terms. All the other code is my own work and is licensed under the [MIT License](https://github.com/demoive/skypecon/blob/master/LICENSE).


## Changelog

### v1.4.10
- Added special limited edition emoticons from the Captain America movie promotion (`blackwidow`, `bucky`, `captain`, `nickfury`, `shielddeflect`)

### v1.4.9
- Added the `tauri` hidden icon

### v1.4.8
- Added hidden icons which had been available on Windows but not Mac until v6.15 (`bike`, `cat`, `dog`, `idea`, `sheep`, `skype`, `talktothehand`)
- Image files processed with imagemin
- Catalog of all emoticons in a YAML datastore

### v1.4.6
- Bumped versioning up to catch up with more accurate representation of features available (a lot of the features were added in the proof of concept)

### v0.5.3
- Fixed "playing too fast" bug on retina screens
- Fixed "white content" bug on retina screens
- Using sprite for when the non-animated images are shown (.`sc-still` & `.sc-hover`)
- Other improvements for better management of Less files

### v0.5.2
- Fixed hover bug on for non-retina hover
- Reduced output CSS file by ~20%

### v0.5.1
- Added necessary vendor prefixes

### v0.5.0
- POC already supported the following features:
  - Change animation speeds with `.sc-slow` & `.sc-fast`
  - Only animate on hover with `.sc-hover`
  - Enlarge to twice the size (40px) with `.sc-2x`
  - Prevent animation altogether with `.sc-still`
