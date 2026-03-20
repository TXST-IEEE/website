# CHANGELOG
---
##### 2026/3/5
---
###### Issues
- On the officer page, the console complains that an HTML anchor tagged element is being created within another anchor element, which Next.js doesn't like 'cause it causes a "hydration error".
- This is caused by the *OfficerCard.tsx* component which creates a MotionEl object, marked as an anchor, with LinkedIn links inside of it, also using anchor tagged elements.

###### Fixes
- Changed the child objects to no longer store links. Now the parent is the only element that stores a link, so the child object can be changed to a div.