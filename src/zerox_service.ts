import { QuoteParams } from "./types";
import qs from 'qs';
import axios from "axios";
import { ZERO_EX_QUOTE_ENDPOINT } from "./constants";
import { ChainId } from "@0x/contract-addresses";


export const getSwapQuote = (swapQuoteParams: QuoteParams, chainId: ChainId) => {

    const queryString = qs.stringify({ ...swapQuoteParams, feeRecipient: '0xa4B2815B66ca21B681d2e1C25a9A54ced751A2e3', affiliateAddress: '0xa4B2815B66ca21B681d2e1C25a9A54ced751A2e3' });

    return axios.get(`${ZERO_EX_QUOTE_ENDPOINT(chainId)}?${queryString}`);

}