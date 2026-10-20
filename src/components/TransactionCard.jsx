import CardHeader from './CardHeader';
import Transaction from './Transaction';

const headerInfo = {
    title: 'Transaction',
    values: [
        {
            title: 'Filter Status',
            link: '#',
            icon: 'bi bi-funnel'
        },
        {
            title: 'Export CSV',
            link: '#',
            icon: 'bi bi-file-earmark-arrow-down'
        }
    ]
}

function TransactionCard() {
    return (
        <div className="card h-100 flex-grow-1">
            <CardHeader {...headerInfo} />
            <Transaction />
        </div>
    )
}

export default TransactionCard;
