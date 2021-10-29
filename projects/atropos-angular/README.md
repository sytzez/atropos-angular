# Atropos for Angular

This is merely an Angular wrapper around [Atropos](https://atroposjs.com/).

## Installation

Install the package:

```bash
npm install ...
```

Add `AtroposModule` to your imports:

```typescript
import { AtroposModule } from '...';

@NgModule({
    // ...
    imports: [
        // ...
        AtroposModule,
    ],
    // ...
})
```

## Usage

You can use the `atropos` component inside your templates:

```angular2html
<atropos>
    // ... Your parallax content
</atropos>
```

Make sure the `atropos` element has some styling for it to work properly:

```css
atropos {
    width: 320px;
    height: 160px;
}
```

## Properties and events

Consult the [Official Atropos Docs](https://atroposjs.com/docs#parameters) for a list of properties and events.

## Slots

In order to place elements in certain containers within the atropos HTML layout,
the following slots are available:

- `root`
- `scale`
- `rotate`

You can place elements in those slots like so:

```angular2html
<atropos>
    <div slot="root"><!-- Inside the root container --></div>
    <div slot="scale"><!-- Inside the scale container --></div>
    <div slot="rotate"><!-- Inside the rotate container --></div>
    <div><!-- Inside the inner container --></div>
</atropos>
```

Consult the [Official Atropos Docs](https://atroposjs.com/docs#html-layout) for more information.
