User.destroy_all
Product.destroy_all

demo = User.create!(email: 'demo@user.com', password: 'testing')

products = Product.create!([
    {
        'name': 'blush',
        'description': 'very pink',
        'price': 4,
        'image_url': '123123'
    },
    {
        'name': 'eyeliner',
        'description': 'very black',
        'price': 6,
        'image_url': '123123'
    },
    {
        'name': 'mascara',
        'description': 'very very black',
        'price': 9,
        'image_url': '123123'
    },
    {
        'name': 'bronzer',
        'description': 'very tan',
        'price': 10,
        'image_url': '123123'
    },
    {
        'name': 'brow gel',
        'description': 'very clear',
        'price': 4,
        'image_url': '123123'
    },
    {
        'name': 'lipstick',
        'description': 'very dark',
        'price': 13,
        'image_url': '123123'
    }
])