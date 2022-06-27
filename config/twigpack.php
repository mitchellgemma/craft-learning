<?php

return [
    // Global settings
    '*' => [
        'useAbsoluteUrl' => false,
        // Manifest file names
        'manifest' => [
            'modern' => 'mix-manifest.json',
            'legacy' => 'mix-manifest.json',
        ],
        // Local files config
        'localFiles' => [
            'basePath' => '@webroot/',
        ],
        // Public server config
        'server' => [
            'manifestPath' => '@webroot/',
            'publicPath' => '/',
        ],
    ],
];