User.destroy_all
Product.destroy_all

demo = User.create!(email: 'demo@user.com', password: 'testing')

products = Product.create!([
    {
        'name': 'BLUSH',
        'description': 'very pink',
        'price': 4
    },
    {
        'name': 'EYELINER',
        'description': 'very black',
        'price': 6
    },
    {
        'name': 'MASCARA',
        'description': 'very very black',
        'price': 9
    },
    {
        'name': 'BRONZER',
        'description': 'very tan',
        'price': 10
    },
    {
        'name': 'BROW GEL',
        'description': 'very clear',
        'price': 4
    },
    {
        'name': 'LIPSTICK',
        'description': 'very dark',
        'price': 13
    },
    {
        'name': 'BLUSH2',
        'description': 'very pink',
        'price': 4
    },
    {
        'name': 'EYELINER2',
        'description': 'very black',
        'price': 6
    },
    {
        'name': 'MASCARA2',
        'description': 'very very black',
        'price': 9
    },
    {
        'name': 'BRONZER2',
        'description': 'very tan',
        'price': 10
    },
    {
        'name': 'BROW GEL2',
        'description': 'very clear',
        'price': 4
    },
    {
        'name': 'LIPSTICK2',
        'description': 'very dark',
        'price': 13
    }
])

eye_photo = "/Users/xj9/Desktop/eye.jpg"

Product.all.each do |product|
    product.photo.attach(io: File.open(eye_photo), filename: "eye.jpg")
end