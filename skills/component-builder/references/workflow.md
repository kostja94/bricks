# Construction Workflow

Use this workflow for new components. Scale the depth to the component's risk and complexity.

## 1. Establish Context

Inspect the target page and neighboring UI. Determine the surface, interface type, audience, primary action, content source, design system, framework, rendering model, and existing reusable primitives.

If missing information changes component responsibility or data behavior, ask one concise question. Make ordinary styling and implementation choices from project evidence.

## 2. Define The Contract

Write down the component's responsibility, inputs, outputs, states, and exclusions. Keep page-level responsibilities outside the component.

Expected states may include default, hover, focus, active, disabled, loading, empty, error, success, expanded, collapsed, and permission-restricted. Include only states that the real workflow can enter.

## 3. Select A Variant

Choose a variant based on content volume, hierarchy, page type, screen constraints, interaction frequency, and accessibility. Do not create a new component identity for a visual variation.

## 4. Implement In Place

Use the project's components, tokens, icons, naming, file organization, data access, and test conventions. Integrate real content contracts. Avoid a second token system or an isolated showcase implementation unless the repository itself is a component library.

## 5. Verify In Context

Test the component where users encounter it. Check representative desktop and mobile sizes, keyboard operation, focus behavior, long content, missing content, loading or error states, and relevant automated tests.

For visually significant work, inspect rendered screenshots. For interactive components, exercise the actual interaction rather than validating markup alone.
