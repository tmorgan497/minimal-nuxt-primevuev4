<template>
    <h1>Index Page</h1>
    <Button @click="showDialog = true">Button</Button>

    <Dialog v-model:visible="showDialog" modal>
        <template #header>
            <h3>Header</h3>
        </template>
        <template #footer>
            <Button label="No" icon="pi pi-times" @click="showDialog = false" />
            <Button label="Yes" icon="pi pi-check" autofocus @click="showDialog = false" />
        </template>
    </Dialog>
</template>

<script setup>
const showDialog = ref(false);
</script>
