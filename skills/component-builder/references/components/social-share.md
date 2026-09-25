# Social Share

## Responsibility

A social-share component helps users share the current canonical resource through selected destinations or the device share interface. It is not a substitute for follow links or social embeds.

## Decisions

Define the canonical URL, share title, supported networks, native share fallback, privacy implications, placement, and success measurement. Include only destinations relevant to the audience.

## Constraints

- Construct share URLs from encoded canonical data.
- Do not load unnecessary third-party tracking scripts merely to open share destinations.
- Label icons with destination and action.
- Copy-link feedback must reflect actual clipboard success or failure.

## Verify

Test canonical URLs, encoded titles, popup blocking, native-share availability, clipboard permissions, keyboard labels, mobile behavior, and analytics without leaking sensitive URLs.
