//@flow
import React from 'react';
import {translate} from 'react-i18next';
import Yup from '../yup';
import {Form, Field, Formik} from 'formik';
import {
    TextField,
    Button,
} from './';
// <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
//<style type="text/css">
//    #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; }
//    /* Add your own MailChimp form style overrides in your site stylesheet or in this style block.
//       We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
//</style>

export const MailListSubscriptionForm = translate('mailinglist')(({t}) => {
    const validationSchema = Yup.object().shape({
        EMAIL: Yup.string().required(t('signup:maillist_email_required_err'))
        .email(t('signup:maillist_email_email_err')),
    });

    const onSubmit = (values = {}, {
        setSubmitting,
        setErrors,
    }) => {
        console.log('To send EMAIL', values.EMAIL);
        setErrors({EMAIL: 'Vaya catastrofe de error'});
        //Si no pones que no se está enviando, no se puede enviar de nuevo
        setSubmitting(false);
    };

    return (
        <div id="mc_embed_signup">
            <Formik
                validationSchema = {validationSchema}
                onSubmit={onSubmit}
                initialValues={{EMAIL: ''}}
                component={({isSubmitting}) =>
            		<Form >
                        {/* action="https://tutellus.us17.list-manage.com/subscribe/post?u=ffe45494a6104522759bbdcb4&amp;id=3275465a01" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate> */}
                        <div id="mc_embed_signup_scroll">
                            <Field component={TextField} name="EMAIL" placeholder={t('email_address')} />
                            {/*
				<input type="email" value="" name="EMAIL" className="email" id="mce-EMAIL" placeholder="email address" required />
					<!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
				<div className="clear">
					<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" />
				</div>
				*/}
                            <div style={ {position: "absolute", left: "-5000px"} } aria-hidden="true">
                                <input type="text" name="b_ffe45494a6104522759bbdcb4_3275465a01" tabIndex="-1" value="" />
                            </div>
                            <Button full type="submit" primary disabled={isSubmitting}>{t('subscribe')}</Button>
                        </div>
                    </Form>
                }
            />
        </div>
    );
});
