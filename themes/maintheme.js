// themes/maintheme.js

import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{emerald.50}',
            100: '{emerald.100}',
            200: '{emerald.200}',
            300: '{emerald.300}',
            400: '{emerald.400}',
            500: '{emerald.500}',
            600: '{emerald.600}',
            700: '{emerald.700}',
            800: '{emerald.800}',
            900: '{emerald.900}',
            950: '{emerald.950}'
        }
    },
    components: {
        menubar: {
            root: {
                borderRadius: '0px',
            },
            colorScheme: {
                light: {
                    root: {
                        background: '{primary.500}',
                        color: '{surface.100}',
                        border: {
                            color: '{surface.500}',
                        },
                    },
                },
                dark: {
                    root: {
                        background: '{primary.800}',
                        color: '{surface.100}',
                        border: {
                            color: '{surface.800}',
                        },
                    },
                },
            },
        },
        button: {
            root: {
                borderRadius: '6px',
                padding: {
                    x: '.25rem',
                    y: '.125rem',
                },
            },
            colorScheme: {
                light: {
                    primary: {
                        background: '{primary.500}',
                        color: '{primary.50}',
                        border: {
                            color: '{primary.700}',
                        },
                    },
                },
                dark: {
                    primary: {
                        background: '{primary.600}',
                        color: '{primary.100}',
                        border: {
                            color: '{primary.300}',
                        },
                    },
                },
            },
        },
    }
});

export default {
    preset: MyPreset,
    options: {
        darkModeSelector: '.p-dark',
    }
};
