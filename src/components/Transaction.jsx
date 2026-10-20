import transactions from "../json-files/transaction.json";

function Transaction() {
    return (
        <div className="transaction-list">
            {
                transactions.map( (value) => {
                    return (
                        <div className="transaction-item" key={value.id}>
                            <div className="transaction-icon bg-forest-light text-lime">
                                <i className={`bi ${value.icon}`}></i>
                            </div>
                            <div className="transaction-info">
                                <div className="transaction-name">{value.name}</div>
                                <div className="transaction-date">{value.date} • {value.time}</div>
                            </div>
                            <div className="transaction-amount text-main">{value.amount}</div>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Transaction;
