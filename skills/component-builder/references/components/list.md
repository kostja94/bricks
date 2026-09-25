# List

## Responsibility

A list presents related items in a linear order. It is the default repeated-content pattern when sequence, scanning, or narrow layouts matter more than two-dimensional comparison.

## Decisions

Define ordering, item identity, density, dividers, metadata, actions, selection, pagination or virtualization, and empty behavior. Use ordered semantics only when order carries meaning.

## Constraints

- Keep item actions distinguishable from item navigation.
- Preserve stable keys and selection across data updates.
- Virtualize only when scale justifies the accessibility and state complexity.
- Do not encode important hierarchy through indentation alone.

## Verify

Check empty and large datasets, long labels, keyboard actions, selection, loading more items, responsive metadata, and screen-reader item counts where useful.
