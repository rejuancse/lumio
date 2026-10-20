import CardHeader from './CardHeader';
import ProductProgress from './productProgress';

const headerInfo = {
    title: 'Product Overview',
    values: [
        {
            title: 'Add Product',
            link: '#',
            icon: 'bi bi-plus-lg'
        },
        {
            title: 'Manage',
            link: '#',
            icon: 'bi bi-gear'
        }
    ]
}

function ProductOverviewCard() {
    return (
        <div className="card h-100 flex-grow-1">
            <CardHeader {...headerInfo} />
            <ProductProgress />
        </div>
    )
}

export default ProductOverviewCard;
