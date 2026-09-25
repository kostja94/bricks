# Carousel

## Responsibility

A carousel lets users browse an ordered set within constrained space. Use it only when sequential browsing is acceptable and hidden items do not need simultaneous comparison.

## Decisions

Define item order, visible count, navigation controls, looping, autoplay policy, pagination, and fallback layout. Prefer a grid or list when users need scanning or comparison.

## Constraints

- Autoplay must be justified, pausable, and respectful of reduced motion.
- Controls need accessible names, disabled states, and predictable keyboard behavior.
- Do not trap horizontal gestures or hide essential content.
- Preserve meaningful reading order independent of visual cloning used for loops.

## Verify

Test keyboard and pointer controls, touch gestures, first and last states, resize, long content, reduced motion, screen-reader order, and behavior without autoplay.
