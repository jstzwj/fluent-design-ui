---
title: Button
---

A control that responds to user input and raises a Click event.

<ClientOnly>

## A simple Button with text content


### Light theme
<template>
    <Button style="height:48px;width:97px">Button</Button>
    <Button style="height:48px;width:97px" disabled>Button</Button>
    <Button style="height:48px;width:97px" primary>Button</Button>
</template>

``` vue
<Button style="height:48px;width:97px">Button</Button>
<Button style="height:48px;width:97px" disabled>Button</Button>
<Button style="height:48px;width:97px" primary>Button</Button>
```

### Dark theme
<template>
<div style="background: #282c34; padding: 8px;">
    <Button style="height:48px;width:97px" dark>Button</Button>
    <Button style="height:48px;width:97px" disabled dark>Button</Button>
    <Button style="height:48px;width:97px" primary dark>Button</Button>
</div>
</template>

``` vue
<Button style="height:48px;width:97px">Button</Button>
<Button style="height:48px;width:97px" disabled>Button</Button>
<Button style="height:48px;width:97px" primary>Button</Button>
```

</ClientOnly>

<script>
export default{

}
</script>
