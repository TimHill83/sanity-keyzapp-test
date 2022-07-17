# Notes: "How To" modules

(Recording my thinking for later reference)

"How To's" contain a set of simple steps to follow, they can all be followed in one go, by one person. They are designed for very simple instructions "Click-Here", "Click there", "Fill in the field" etc.)

## Key Design Questions / Decision

### Should HowTo steps have a title? _(Current Answer: "no")_

I started with a title in each step, but in truth, the best result is to have a single bullet/sentence for each step

- [Ref: Figma example](https://www.figma.com/file/I1G3HF0x8XH4xe60Lc3p40/Keyzapp-Support?node-id=0%3A1)
- [Ref: SweetProcess](https://www.sweetprocess.com/procedures/v1a5pi360W/0130-create-cabinet/)

I have used Portable Text (basicText) instead of a string for this, to allow for emphasis and annotations

### Single Image per Step

Seems sensible for now. Possibly augment later with Video option?? Or gallery?

### Steps are reusable. Should we also have inline steps? _(Current Answer: "no")_

I started with allowing inline steps as well as reusable steps. It definitely makes sense to be able to reuse steps, since they are very granular, and many of them will be reused.

Inline steps could arguably be useful, where no re-use is necessary since there should be a performance advantage and it might declutter the search experience in Sanity **BUT** I have decided against for now since:

- Makes it easier to code the frontend if there are fewer variables
- Most "How To"s will probably end up including at least one shared/reused step, reducing the performance advantage of inline steps and increasing complexity
- It's harder in the Sanity UI to differentiate between shared steps and inline steps, and it presents the user with more options to choose from

### Steps can have an "outcome"

An "Outcome is not a step, but it is information (basically in the same format) that tells you something has happened.

Initially I created a separate document called `outcome` that was referenced from the HowTo, but since an outcome is always dependent on a Step, I put an outcomes array in the step.

### How to handle Recommended next How-To's?

**ToDo:** This is straying into process territory, but for a customer user especially, there are sometimes processes that logically follow that they should be able to look up. Perhaps add this as a further optional link.

### Consider- allow nesting of howTos?

?? Sometimes you might want to wrap a "How To" in extra steps (e.g. For a Keyzapp agent you might to have steps like "Login as Sysadmin" first)

### Consider- audience and context for howTos

?? E.g. logged into Sysadmin? Is context different to audience?
