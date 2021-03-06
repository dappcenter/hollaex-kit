import React from 'react';
import { Link } from 'react-router';

import { IconTitle, Button } from '../../../components';
import { ICONS } from '../../../config/constants';
import STRINGS from '../../../config/localizedStrings';

const RiskyOrder = ({ data, onConfirm, onClose }) => {
    const { symbol = '' } = data.coins[data.pairData.pair_2] || {};
    return (
        <div className="risky-trade-wrapper">
            <IconTitle
                text={STRINGS.USER_SETTINGS.RISKY_TRADE_DETECTED}
                iconPath={ICONS.SETTING_RISK_MANAGE_WARNING_ICON}
                textType="title"
                useSvg={true}
                underline={true}
            />
            <div className="mt-1 mb-2" >
                {STRINGS.formatString(
                    STRINGS.USER_SETTINGS.RISKY_WARNING_TEXT_1,
                    <span className="risky_managment_percentage" >
                        {STRINGS.formatString(
                            STRINGS.USER_SETTINGS.RISKY_WARNING_TEXT_2,
                            `${data.order.order_portfolio_percentage}%`).join('')}
                    </span>)
                }
            </div>
            <div className="mt-1 mb-2 ">
                {STRINGS.USER_SETTINGS.RISKY_WARNING_TEXT_3}
            </div>
            <Link to='/settings?tab=5' onClick={() => onClose()} className='blue-link'>
                {STRINGS.USER_SETTINGS.GO_TO_RISK_MANAGMENT}
            </Link>
            <div className="mb-2 mt-2">
                {STRINGS.TYPE}: {data.order.type} {data.order.side}
            </div>
            {data.order.price
                ? <div className="mb-2" >
                    {STRINGS.AMOUNT}: {data.order.price} {symbol.toUpperCase()}
                </div>
                : null
            }
            <div className="d-flex mt-3">
                <Button
                    label={STRINGS.BACK_TEXT}
                    onClick={onClose} />
                <div className="mx-2"></div>
                <Button
                    label={STRINGS.PROCEED}
                    onClick={() => {
                        onConfirm();
                        onClose();
                    }}
                />
            </div>
        </div>
    );
};

export default RiskyOrder;