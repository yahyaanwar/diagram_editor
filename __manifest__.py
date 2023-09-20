{
    'name': 'Diagram Editor',
    'description': 'Edit diagram images using diagram.net.',
    'category': 'Productivity',
    'website': 'yahyaanwar.github.io',
    'support': 'k3ic8zwya@mozmail.com',
    'version': '1.0',
    'license': 'OPL-1',
    'price': 0, 'currency': 'USD',
    'author': 'Yahya Anwar Ramadhan',
    'application': False,
    'installable': True,
    'auto_install': True,
    'depends': [
        'base',
        'web',
        'web_editor',
    ],
    'external_dependencies': {
        'python': [
        ],
        'bin': [
        ],
    },
    'data': [
    ],
    'demo': [
    ],
    'assets': {
        'web.assets_backend': [
            '/diagram_editor/static/src/vendors/diagram-editor.js',
            '/diagram_editor/static/src/components/image_field.js',
            '/diagram_editor/static/src/components/image_field.xml',
        ],
        'web_editor.assets_wysiwyg': [
            '/diagram_editor/static/src/js/wysiwyg.js',
        ],
    },
    'images': [
    ],
    'post_load': 'apply_patch',
    'pre_init_hook': 'pre_init_hook',
    'post_init_hook': 'post_init_hook',
    'uninstall_hook': 'uninstall_hook',
}