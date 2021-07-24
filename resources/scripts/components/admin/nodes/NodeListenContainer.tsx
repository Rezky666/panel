import React from 'react';
import AdminBox from '@/components/admin/AdminBox';
import tw from 'twin.macro';
import Field from '@/components/elements/Field';
import SpinnerOverlay from '@/components/elements/SpinnerOverlay';
import { Form, useFormikContext } from 'formik';

export default () => {
    const { isSubmitting } = useFormikContext();

    return (
        <AdminBox title={'Listen'} css={tw`w-full relative`}>
            <SpinnerOverlay visible={isSubmitting}/>

            <Form css={tw`mb-0`}>
                <div css={tw`mb-6 md:w-full md:flex md:flex-row`}>
                    <div css={tw`mb-6 md:w-full md:flex md:flex-col md:mr-4 md:mb-0`}>
                        <Field
                            id={'listenPortHTTP'}
                            name={'listenPortHTTP'}
                            label={'HTTP Listen Port'}
                            type={'number'}
                        />
                    </div>

                    <div css={tw`mb-6 md:w-full md:flex md:flex-col md:ml-4 md:mb-0`}>
                        <Field
                            id={'publicPortHTTP'}
                            name={'publicPortHTTP'}
                            label={'HTTP Public Port'}
                            type={'number'}
                        />
                    </div>
                </div>

                <div css={tw`mb-6 md:w-full md:flex md:flex-row`}>
                    <div css={tw`mb-6 md:w-full md:flex md:flex-col md:mr-4 md:mb-0`}>
                        <Field
                            id={'listenPortSFTP'}
                            name={'listenPortSFTP'}
                            label={'SFTP Listen Port'}
                            type={'number'}
                        />
                    </div>

                    <div css={tw`mb-6 md:w-full md:flex md:flex-col md:ml-4 md:mb-0`}>
                        <Field
                            id={'publicPortSFTP'}
                            name={'publicPortSFTP'}
                            label={'SFTP Public Port'}
                            type={'number'}
                        />
                    </div>
                </div>
            </Form>
        </AdminBox>
    );
};