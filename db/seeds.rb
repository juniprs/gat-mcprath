User.destroy_all
Product.destroy_all

demo = User.create!(email: 'demo@user.com', password: 'testing')

products = Product.create!([
    {
        'name': 'blush',
        'description': 'very pink',
        'price': 4
    },
    {
        'name': 'eyeliner',
        'description': 'very black',
        'price': 6
    },
    {
        'name': 'mascara',
        'description': 'very very black',
        'price': 9
    },
    {
        'name': 'bronzer',
        'description': 'very tan',
        'price': 10
    },
    {
        'name': 'brow gel',
        'description': 'very clear',
        'price': 4
    },
    {
        'name': 'lipstick',
        'description': 'very dark',
        'price': 13
    }
])