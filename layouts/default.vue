<!-- layouts/default.vue -->

<template>

    <div class="flex h-screen">

        <!-- Sidebar -->
        <div class="w-12 flex justify-center bg-surface-500 pt-8">
            <nav>
                <Icon name="mdi:cogs" size="30px" class="text-primary-50"/>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex flex-col flex-grow">
            <Menubar>
                <template #start>
                    <a class="font-bold" href="/">Hello World</a>
                </template>
            </Menubar>
            <main class="m-2 flex-grow">
                <NuxtPage />
            </main>
        </div>

    </div>

</template>

<script setup>
import { ref } from 'vue';

const isDarkMode = ref(false);

function toggleColorScheme() {
    isDarkMode.value = !isDarkMode.value;
    console.log(isDarkMode.value);
    document.body.classList.toggle("dark");
}
</script>
