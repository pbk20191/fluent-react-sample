import { type NonIndexRouteObject } from "react-router-dom"
import {
    Button,
    Input,
    Link as FluentUILink,
    makeStyles,
    mergeClasses,
    shorthands,
    Text,
    tokens,
    Dialog,
    DialogTrigger,
    DialogSurface,
    DialogBody,
    DialogTitle,
    DialogContent,
    DialogActions,
    Toast,
    ToastTitle,
    Spinner
} from "@fluentui/react-components"
import React, { Fragment } from "react"
import { ReactComponent as LockOpenIcon } from "../icon/lock-open.svg"
import { ReactComponent as PersonIcon } from "../icon/person.svg"
import { useToastCenter } from "../components/toastCenter"

const useStyle = makeStyles({
    logo: {
        maxWidth: "304px",
        maxHeight: "167px",
        flexShrink: 0,
        marginBottom: "32px",
        marginTop: "10vh"
    },
    root: {
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "15vh"
    },

    container: {
        maxWidth: "550px",
        maxHeight: "550px",
        boxShadow: "4px 4px 4px 0px " + tokens.colorBrandShadowAmbient,
        backgroundColor: tokens.colorBrandBackground2,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        ...shorthands.borderRadius("16px"),
        ...shorthands.padding("50px")
    },
    inputBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "280px"
    },
    inputField: {
        maxWidth: "max-content",
        flexGrow: 1
    },
    fieldIcon: {
        // "#4D705A"
        color: tokens.colorBrandForeground1,
        alignSelf: "flex-end",
        marginInlineEnd: "9px"
    },
    actionButton: {
        width: "140px"
    },
    linkBox: {
        display: "flex",
        flexDirection: "column",
        marginTop: "19px"
    }
})

const useSimpleStyle = makeStyles({
    height55px: {
        height: "55px"
    },
    height49px: {
        height: "49px"
    },
    displayFlex: {
        display: "flex"
    },
    width29px: {
        width: "29px"
    },
    height35px: {
        height: "35px"
    },
    height40px: {
        height: "40px"
    }
})

const View: React.FC = () => {
    const style = useStyle()
    const simpleStyle = useSimpleStyle()
    const toastCenter = useToastCenter()
    return (
        <div className={style.root}>
            <img src="/baramiLogo.png" alt="appLogo" className={style.logo} />
            <div className={style.container}>
                <Text weight="bold" size={900} wrap block>
                 SIGN IN
                </Text>
                <div className={simpleStyle.height49px}></div>
                <div className={style.inputBox}>
                    <div className={simpleStyle.displayFlex}>
                        <PersonIcon className={style.fieldIcon} />
                        <Input
                            placeholder="아이디"
                            appearance="underline"
                            type="text"
                            size="large"
                            className={style.inputField}
                            contentBefore={<Fragment />}
                        />
                    </div>
                    <div className={simpleStyle.height35px}></div>
                    <div className={simpleStyle.displayFlex}>
                        <LockOpenIcon className={style.fieldIcon} />
                        <Input
                            placeholder="비밀번호"
                            appearance="underline"
                            type="password"
                            size="large"
                            className={style.inputField}
                            contentBefore={<Fragment />}
                        />
                    </div>
                </div>
                <div className={simpleStyle.height55px}></div>
                <div>
                    <div
                        className={mergeClasses(
                            simpleStyle.height40px,
                            simpleStyle.displayFlex
                        )}
                    >
                        <Dialog>
                            <DialogTrigger>
                                <Button
                                    appearance="primary"
                                    size="large"
                                    shape="rounded"
                                    className={style.actionButton}>
                                    로그인
                                </Button>
                            </DialogTrigger>
                            <DialogSurface>
                                <DialogBody>
                                    <DialogTitle>Dialog title</DialogTitle>
                                    <DialogContent>
                                        정말로 로그인 버튼을 누른게 맞습니까?
                                    </DialogContent>
                                    <DialogActions>
                                        <DialogTrigger disableButtonEnhancement>
                                            <Button appearance="secondary">Close</Button>
                                        </DialogTrigger>
                                        <Button appearance="primary">Do Something</Button>
                                    </DialogActions>
                                </DialogBody>
                            </DialogSurface>
                        </Dialog>
                        <div className={simpleStyle.width29px}></div>
                        <Button
                            appearance="secondary"
                            size="large"
                            shape="rounded"
                            className={style.actionButton}
                            onClick={(event) => {
                                toastCenter.dispatchToast(
                                    <Toast>
                                        <ToastTitle media={<Spinner size="tiny"/>}>회원가입 중</ToastTitle>
                                    </Toast>
                                )
                            }}
                        >
                            회원가입
                        </Button>
                    </div>
                    <div className={style.linkBox}>
                        <FluentUILink as="a">아이디 찾기</FluentUILink>
                        <FluentUILink as="a">비밀번호 찾기</FluentUILink>
                    </div>
                </div>
            </div>
        </div>
    )
}

const route: NonIndexRouteObject = {
    path: "authorize",
    element: <View />
}

export default route
