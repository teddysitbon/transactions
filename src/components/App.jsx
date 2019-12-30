import React, { Component } from 'react';
import './App.scss';
import Emoji from './common/emoji';
import Header from './header';
import Transaction from './transaction';


class App extends Component {
    render() {
        return (
            <>
                <Header />
                <section className={'content'}>
                        <h2 className={'content-title'}>
                            All Transactions
                            <Emoji
                                label="transaction"
                                symbol="💸"
                            />
                        </h2>
                        <div className={'transactions'}>

                            <Transaction
                                id={1}
                                amount={12}
                                payer={{ firstname : "Jean-Claude",
                                    lastname : "Van Damme",
                                    businessName : null }}
                                receiver = {{
                                    firstname : "Sylvester",
                                    lastname : "Stallone",
                                    businessName : null }}
                                message = {"Be aware."}
                                date = {"2019-11-29T10:50:42.389Z"}
                                status = {"accepted"}
                                isPro = {false}
                            />

                            <div className={'transaction'}>
                                <span className={'transaction-status'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 241.171 241.171"  className={'logo-cancel'}><path d="M138.138,120.754l99.118-98.576c4.752-4.704,4.752-12.319,0-17.011c-4.74-4.704-12.439-4.704-17.179,0   l-99.033,98.492L21.095,3.699c-4.74-4.752-12.439-4.752-17.179,0c-4.74,4.764-4.74,12.475,0,17.227l99.876,99.888L3.555,220.497   c-4.74,4.704-4.74,12.319,0,17.011c4.74,4.704,12.439,4.704,17.179,0l100.152-99.599l99.551,99.563   c4.74,4.752,12.439,4.752,17.179,0c4.74-4.764,4.74-12.475,0-17.227L138.138,120.754z"/></svg>
                                </span>
                                <div className={'transaction-description'}>
                                    <div className={'identifiant'}>
                                        <span className={'identifiant-number'}>
                                            <span className={'identifiant-title'}>ID :</span>
                                            <span>23987</span>
                                        </span>
                                        <span className={'identifiant-date'}>
                                            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M6,11 C8.76338515,11 11,8.75474957 11,6 C11,3.23661485 8.75474957,1 6,1 C3.24525043,1 1,3.23661485 1,6 C1,8.75474957 3.23661485,11 6,11 Z M6,1.69948187 C8.37478411,1.69948187 10.3005181,3.62521589 10.3005181,6 C10.3005181,8.37478411 8.37478411,10.3005181 6,10.3005181 C3.62521589,10.3005181 1.69948187,8.36614853 1.69948187,6 C1.69948187,3.62521589 3.62521589,1.69948187 6,1.69948187 Z M5.76683938,6.58721934 L7.43350604,6.58721934 C7.63212435,6.58721934 7.78756477,6.43177893 7.78756477,6.23316062 C7.78756477,6.03454231 7.63212435,5.8791019 7.43350604,5.8791019 L6.1208981,5.8791019 L6.1208981,3.8238342 C6.1208981,3.62521589 5.96545769,3.46977547 5.76683938,3.46977547 C5.56822107,3.46977547 5.41278066,3.62521589 5.41278066,3.8238342 L5.41278066,6.23316062 C5.41278066,6.43177893 5.56822107,6.58721934 5.76683938,6.58721934 Z" id="date-shape" stroke="#000000" stroke-width="0.7" fill="#000000" fill-rule="nonzero"></path></svg>
                                            24/12/2019
                                        </span>
                                    </div>
                                    <div className={'users'}>
                                        <span className={'user-payer'}>Chuck Norris</span>
                                        <span className={'user-to'}>à</span>
                                        <span className={'user-receiver'}>Arnold Schwarzenegger</span>
                                    </div>
                                    <div className={'message'}>
                                        Remboursement Zoo 🐘
                                    </div>
                                </div>
                                <span className={'transaction-amount'}>
                                    25.99 €
                                </span>
                            </div>

                            <div className={'transaction'}>
                                <span className={'transaction-status'}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 299.995 299.995" y="0px" x="0px" className={'logo-pending'}><path d="M149.995,0C67.156,0,0,67.158,0,149.995s67.156,150,149.995,150s150-67.163,150-150S232.834,0,149.995,0z     M214.842,178.524H151.25c-0.215,0-0.415-0.052-0.628-0.06c-0.213,0.01-0.412,0.06-0.628,0.06    c-5.729,0-10.374-4.645-10.374-10.374V62.249c0-5.729,4.645-10.374,10.374-10.374s10.374,4.645,10.374,10.374v95.527h54.47    c5.729,0,10.374,4.645,10.374,10.374C225.212,173.879,220.571,178.524,214.842,178.524z"/></svg>
                                </span>
                                <div className={'transaction-description'}>
                                    <div className={'identifiant'}>
                                        <span className={'identifiant-number'}>
                                            <span className={'identifiant-title'}>ID :</span>
                                            <span>37657</span>
                                        </span>
                                        <span className={'identifiant-date'}>
                                            <svg viewBox="0 0 12 12" width="12" height="12"><path d="M6,11 C8.76338515,11 11,8.75474957 11,6 C11,3.23661485 8.75474957,1 6,1 C3.24525043,1 1,3.23661485 1,6 C1,8.75474957 3.23661485,11 6,11 Z M6,1.69948187 C8.37478411,1.69948187 10.3005181,3.62521589 10.3005181,6 C10.3005181,8.37478411 8.37478411,10.3005181 6,10.3005181 C3.62521589,10.3005181 1.69948187,8.36614853 1.69948187,6 C1.69948187,3.62521589 3.62521589,1.69948187 6,1.69948187 Z M5.76683938,6.58721934 L7.43350604,6.58721934 C7.63212435,6.58721934 7.78756477,6.43177893 7.78756477,6.23316062 C7.78756477,6.03454231 7.63212435,5.8791019 7.43350604,5.8791019 L6.1208981,5.8791019 L6.1208981,3.8238342 C6.1208981,3.62521589 5.96545769,3.46977547 5.76683938,3.46977547 C5.56822107,3.46977547 5.41278066,3.62521589 5.41278066,3.8238342 L5.41278066,6.23316062 C5.41278066,6.43177893 5.56822107,6.58721934 5.76683938,6.58721934 Z" id="date-shape" stroke="#000000" stroke-width="0.7" fill="#000000" fill-rule="nonzero"></path></svg>
                                            29/11/2019
                                        </span>
                                    </div>
                                    <div className={'users'}>
                                        <span className={'user-payer'}>Keanu Reeves</span>
                                        <span className={'user-to'}>à</span>
                                        <span className={'user-receiver'}>Morpheus 😎</span>
                                    </div>
                                    <div className={'message'}>
                                        🔴
                                    </div>
                                </div>
                                <span className={'transaction-amount'}>
                                    1010101010101.01 €
                                </span>
                            </div>
                        </div>
                </section>
            </>
        );
    }
}

export default App;
