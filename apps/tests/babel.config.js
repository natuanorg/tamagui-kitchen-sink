module.exports = function (api) {
    api.cache(true)
    return {
        presets: [['babel-preset-expo', { jsxRuntime: 'automatic' }]],
        plugins: [
            // if you want reanimated support
            // 'react-native-reanimated/plugin',
            [
                '@tamagui/babel-plugin',
                {
                    components: ['tamagui', '@my/ui'],
                    config: './tamagui.config.ts',
                },
            ],
            [
                'transform-inline-environment-variables',
                {
                    include: 'TAMAGUI_TARGET',
                },
            ],
        ],
    }
}
